const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm972vt/",
            name: "ssm972vt",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm972vt/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "党建红色微平台"
        } 
    }
}
export default base
