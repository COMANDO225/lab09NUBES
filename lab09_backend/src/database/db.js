import mongoose from 'mongoose';

mongoose.connect(`mongodb+srv://root:root@cluster0.fcb17r9.mongodb.net/`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection;
db.on('open', () => { console.log('Connected to MongoDB') })
db.on('error', (error) => { console.log('error al conectar a mongodb' + error) });

export default db