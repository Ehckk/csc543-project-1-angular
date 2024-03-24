import Credentials from "./Credentials";

class Registration extends Credentials {
    constructor(
        public display_name: string,
        public confirm: string,
        username: string,
        password: string,
    ) {
        super(username, password)
    }
}

export default Registration