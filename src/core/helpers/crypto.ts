import * as crypto from 'crypto';

const algorithm = 'aes-256-cbc';
const key = Buffer.from(process.env.CRYPTO_SECRET);
const iv = crypto.randomBytes(16);

interface EncryptedTextAttributes {
    iv: string,
    encryptedData: string
}

export const encryptText = (plainText: string): EncryptedTextAttributes => {
    let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
    let encrypted = cipher.update(plainText);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
}

export const decryptText = (encrypted: EncryptedTextAttributes): string => {
    let iv = Buffer.from(encrypted.iv, 'hex');
    let encryptedText = Buffer.from(encrypted.encryptedData, 'hex');
    let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}

export const encryptFile = (plainFile: Buffer): Buffer => {
    const cipher = crypto.createCipher(algorithm, process.env.CRYPTO_SECRET);
    const encryptedFile = Buffer.concat([cipher.update(plainFile), cipher.final()]);
    return encryptedFile;
}

export const decryptFile = (encryptedFile: Buffer): Buffer => {
    const decipher = crypto.createDecipher(algorithm, process.env.CRYPTO_SECRET);
    const decryptedFile = Buffer.concat([decipher.update(encryptedFile), decipher.final()]);
    return decryptedFile;
}