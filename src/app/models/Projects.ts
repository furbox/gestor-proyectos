export class Projects {
    constructor(
        public project_id: number,
    		public project_name: string,
    		public project_desc: string,
    		public project_objetive: string,
    		public project_date_start: string,
    		public project_date_end: string,
    		public project_user_owner_id: number,
    		public project_repository: string,
    		public project_date_add: string,
    		public project_date_upd: string,
    		public project_server_ftp_url: string,
    		public project_server_ftp_user: string,
    		public project_server_ftp_pass: string,
    		public project_server_db_url: string,
    		public project_server_db_user: string,
    		public project_server_db_pass: string,
    		public project_web_hosting: string,
    		public project_programming_language: string 
        ) {}
}
