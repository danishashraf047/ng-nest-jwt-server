export interface ResultantAttributes<T> {
    status: boolean,
    message: string,
    data: T
}

export class ResultantBuilder<T>{
    private resultant: ResultantAttributes<T> = {
        status: false,
        message: '',
        data: null
    };

    public setStatus(status: boolean) {
        this.resultant.status = status;
        return this;
    }

    public setMessage(message: string) {
        this.resultant.message = message;
        return this;
    }

    public setData(data: T) {
        this.resultant.data = data;
        return this;
    }

    public build = () => this.resultant;
}