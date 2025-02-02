interface RequestUrl {
	protocol: string
	port: number
	host: string
	path: string
}

interface Request {
	url: RequestUrl
	headers: any
	method: string
}

interface Response {
	statusCode: number,
	body: any,
	headers: any,
	request: Request,
}

interface Response {
	response: Response
	body: any
}

export class Api {

	statusCode: number
	body: any
	headers: any
	request: Request

	constructor(axios) {

        this.statusCode = axios.response.status;
		this.body = axios.response.data;
		this.headers = axios.response.headers;
		this.request = {
			url: {
				protocol: axios.request.protocol,
				port: axios.request.agent?.defaultPort || axios.request.socket?.localPort,
				host: axios.request.host,
				path: axios.request.path,
			},
			headers: axios.request.getHeaders(),
			method: axios.request.method
		}
	}

	generate(): Response {
		return {
			response: {
				statusCode: this.statusCode,
				body: this.body,
				headers: this.headers,
				request: this.request,
			},
			body: this.body
		};
	}
}
