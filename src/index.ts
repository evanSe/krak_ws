import { METHODS  } from 'http'

class Trasa implements TrasaInterface
{
	[key:string]: any
	private routes: any = []
	private handlers: any = {}
	constructor()
	{
		// itterate through http methods i.e. GET, POST
		METHODS.forEach((str) => {
			// Create a method from each http method
			this[str.toLowerCase()] = (method: any, pattern?: any, handler?: any) => this.addMethod(method, pattern, handler);
			this.handlers[str] = {}
			this.routes[str] = []
		})
	}

	private add(method: any, pattern: any, handler?: any)
	{
		console.log(method);
		console.log(pattern);
		console.log(handler);
		this.routes[method].push(pattern)
		this.handlers[method][pattern] = handler
		return this;
	}
}

interface TrasaInterface
{
	// [key:string]: any
}

let trasa = new Trasa()
trasa.get('1', '2', '3')