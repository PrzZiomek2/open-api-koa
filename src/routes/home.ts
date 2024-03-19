import Router from "koa-router";

const router = new Router();

router.get("/", async ctx => {
  try {
    ctx.body = `
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Welcome Page</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            text-align: center;
                        }
                        h1 {
                            color: #333;
                        }
                    </style>
                </head>
                <body>
                    <h1>Koa App!</h1>
                    <p>make yourself at home</p>
                </body>
            </html>
        `;
  } catch (err) {
    console.error(err);
  }
});

export default router;
