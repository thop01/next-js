import mongoose from "mongoose";
globalThis.DB = null;

export const getDB = async () => {
    try {
        if (globalThis.DB && globalThis.DB.connection.readyState === 1) {
            return globalThis.DB;
        }
        globalThis.DB = mongoose.createConnection('mongodb://localhost:27017/nieuwswebsite', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const connection = mongoose.createConnection('mongodb://127.0.0.1:27017/test');

        return globalThis.DB;
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
    }
}

const schema = new mongoose.Schema({ 
    name: String, 
    body: String 
});

const Article = mongoose.model('nieuwsarticles', schema);
