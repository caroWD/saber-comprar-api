import { app, NODE_ENV, PORT } from './src'

app.listen(PORT, () =>
  console.log(
    `🚀 Server listening at http://localhost:${PORT} in ${NODE_ENV} mode`
  )
)
