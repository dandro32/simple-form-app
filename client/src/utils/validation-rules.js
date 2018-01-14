const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
export const required = val => val ? undefined : "This field is required";
export const email =  val => val && !emailRegex.test(val) ? "Wrong email format" : undefined;