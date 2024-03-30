import PostModel from '../models/Post.js';

export const getAll = async (req, res) => {
    try {
        // Get All Posts
        const posts = await PostModel.find().populate('user').exec();

        res.json(posts)

    } catch (err) { 
        console.log(err);
        res.status(500).json({
            message: 'Не Удалось Получить Статьи',
        });
    }
}

export const getOne = async (req, res) => {
    try {
        const postId = req.params.id;

        const doc = await PostModel.findOneAndUpdate(
            {
                _id: postId,
            },
            {
                $inc: { viewsCount: 1 },
            },
            {
                returnDocument: 'after',
            }
        );

        if (!doc) {
            return res.status(404).json({
                message: 'Статья Не Найдена',
            });
        }

        res.json(doc);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не Удалось Получить Статью',
        });
    }
}

export const create = async (req, res) => {
    try {

        const doc = new PostModel({
            year: req.body.year,
            brand: req.body.brand,
            model: req.body.model,
            color: req.body.color,
            price: req.body.price,
            image: req.body.image,
            description: req.body.description,
            user: req.userId,
        })

        const post = await doc.save();

        res.json(post);

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Не Удалось Создать Объявление',
        });
    }
}

export const remove = async (req, res) => {
    try {
        const postId = req.params.id;

        const doc = await PostModel.findOneAndDelete({ _id: postId });

        if (!doc) {
            return res.status(404).json({
                message: 'Не Удалось Найти Статью',
            });
        }

        res.json({
            success: true,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Не Удалось Удалить Статью',
        });
    }
}

export const update = async (req, res) => {
    try {
        const postId = req.params.id;

        await PostModel.updateOne(
        {
            _id: postId, 
        },
        {
            year: req.body.year,
            brand: req.body.brand,
            model: req.body.model,
            color: req.body.color,
            image: req.body.image,
            price: req.body.price,
            description: req.body.description,
            user: req.userId,
        });

        res.json({
            success: true,
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Не Удалось Обновить Статью',
        });
    }
}