let crypto = require('crypto');

export function properties (app: { get: (arg0: string, arg1: { (req: any, res: any): void; (req: any, res: any): void; (req: any, res: any): void; (req: any, res: any): void; (_: any, res: any): void; }) => void; }) {
    
    app.get('/setCookie/:name',function(req, res){
        const cookie_name= req.params.name;
        let id = crypto.randomBytes(20).toString('hex');
        const actualDate = new Date(new Date().getDate()+1);
        res.cookie(cookie_name, id, 
                {expires: actualDate, maxAge: 5000, secure: true, httpOnly: true, sameSite: 'lax'})
            .send('Cookie is set');
    });
    
    app.get('/getCookies', function(req, res) {
        console.log("Cookies :  ", req.cookies);
        res.send(req.cookies);
    });
    
    app.get('/clearCookie/:name', function(req, res) {
        const cookie_name= req.params.name;
        res.clearCookie(cookie_name);
        res.send('Cleared cookie');
    });
    
    app.get('/timeOut/:time', function(req, res) {
        const time: number= Number(req.params.time);
        setTimeout(function() {
            res.send('Time out of ' + time + ' seconds');
        }, time * 1000);
    });
    
    app.get('/redirect',function(_, res){
        res.redirect('/');
    });

    return app;
}