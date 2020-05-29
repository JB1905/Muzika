// import Router from "next/router";
import { Cookies } from 'react-cookie';
// import axios from "axios";

const cookies = new Cookies();

export function handleAuthSSR(req: any) {
  let token = null;

  if (req) {
    token = req.headers.cookie.replace(
      /(?:(?:^|.*;\s*)spotify_token\s*\=\s*([^;]*).*$)|^.*$/,
      '$1'
    );
  } else {
    token = cookies.get('token');
  }

  return token;

  // try {
  //   const response = await axios.get(serverUrl + "/api/token/ping", {
  //     headers: { Authorization: token }
  //   });

  //   console.log("token ping:", response.data.msg);
  // } catch (err) {
  //   console.log(err.response.data.msg);
  //   console.log("redirecting back to main page");

  //   if (ctx.res) {
  //     ctx.res.writeHead(302, {
  //       Location: "/"
  //     });
  //     ctx.res.end();
  //   } else {
  //     Router.push("/");
  //   }
  // }
}
