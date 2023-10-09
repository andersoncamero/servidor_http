const createApp = require('./app')

async function Main(){
    const PORT = process.env.PORT || 3001
    const app = await createApp()

    app.listen(PORT, () => {
      console.log('servido en el puerto: ' + PORT);
    })
  }

  Main()
