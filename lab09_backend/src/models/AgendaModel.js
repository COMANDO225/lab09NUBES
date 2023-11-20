import mongoose from 'mongoose';

// creamos el esquema de la base de datos
const Schema = mongoose.Schema;

//instanciamos el esquema
const agendaSchema = new Schema(
    {
        nombre: String,
        celular: String,
        correo: String,
        image_url: String,
        cloudinary_id: String,
    },
    {
        collection: 'agenda',
        timestamps: true,
    }
);

export default mongoose.model('agenda', agendaSchema);