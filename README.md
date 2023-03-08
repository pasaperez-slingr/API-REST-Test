# API-REST-Test
Api Rest in NodeJs With Express

# Installation
## Download Repository
```bash
git clone https://github.com/pasaperez-slingr/API-REST-Test.git
```


## Install Dependencies

```bash
npm install
```

# Starting Services

```bash
npm start
```

# Test Paths

## Para cookies:

http://localhost:30000/getCookies


http://localhost:30000/setCookie/test


http://localhost:30000/clearCookie/test


### From Platform Console
```javascript
log(JSON.stringify(app.endpoints.http.get("http://127.0.0.1:30000/getCookies")))
```

```javascript
log(JSON.stringify(app.endpoints.http.get({path: "http://127.0.0.1:30000/getCookies", forceDisableCookies: "true"})))
```

```javascript
log(JSON.stringify(app.endpoints.http.get({path: "http://127.0.0.1:30000/setCookie/cookie1", forceDisableCookies: "true"})))
```

```javascript
log(JSON.stringify(app.endpoints.http.get({path: "http://127.0.0.1:30000/getCookies", forceDisableCookies: "false"})))
```

```javascript
log(JSON.stringify(app.endpoints.http.get({path: "http://127.0.0.1:30000/setCookie/cookie1", forceDisableCookies: "false"})))
```

```javascript
log(JSON.stringify(app.endpoints.http.get({path: "http://localhost:30001/redirect1"})))
```

```javascript
log(JSON.stringify(app.endpoints.http.get({path: "http://localhost:30001/redirect1", removeRefererHeaderOnRedirect: true})))
```


```javascript
log(JSON.stringify(app.endpoints.http.get({path: "http://localhost:30001/redirectOut", followAuthorizationHeader: "true", headers:{"Authorization" : "Bearer token"}, fullResponse: "true"})))
```
