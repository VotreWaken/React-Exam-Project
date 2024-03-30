import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({

    year: {
        type: String,
        required: true,
    },

    brand: {
        type: String,
        required: true,
    },

    model: {
        type: String, 
        required: true,
    },

    color: {
        type: String, 
        required: true,
    },

    price: {
        type: Number,
    },

    image: String, 

    description: {
        type: String, 
        required: true,
    },

    viewsCount: {
        type: Number,
        default: 0, 
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
}, 
{
    timestamps: true,
},
);

export default mongoose.model('Post', PostSchema);
