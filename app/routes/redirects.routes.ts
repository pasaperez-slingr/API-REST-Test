export function redirectOut (server: { get: (arg0: string, arg1: (req: any, res: any, next: any) => void) => void; post: (arg0: string, arg1: (req: any, res: any, next: any) => void) => void; }) {

  server.get('/redirectOut', (req: any, res: any, next: any) => { 
    console.log("Redirecting");
    res.redirect('http://localhost:30000/redirectOut', next); 
  });

  server.post('/redirectPost', (_: any, res: any, next: any) => { 
    res.redirect('http://localhost:30000/redirectPost', next); 
  });

  server.get('/redirect1', (req: any, res: any, next: any) => { 
    console.log("Redirecting");
    console.log(req.headers.referer);
    res.redirect('http://localhost:30000/redirect2', next); 
  });

  server.get('/redirect3', (req: any, res: any, next: any) => { 
    console.log(req.headers.referer);
    res.redirect('http://localhost:30000/redirectFinal', next); 
  });

  server.get('/methodFinal', (req: any, res: any, next: any) => { 
    console.log(req.headers.referer);
    res.send({res: 'GET'}); next(); 
  });

  return server;
}