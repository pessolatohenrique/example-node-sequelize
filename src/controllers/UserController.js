const model = require("../models").User;
const tokens = require("../auth/tokens");

class UserController {
  static async login(req, res) {
    try {
      const { user } = req;
      const token = tokens.access.create(user.id);
      const refreshToken = await tokens.refresh.create(user.id);
      res.set({ Authorization: token });
      return res.status(200).json({ accessToken: token, refreshToken });
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async show(req, res) {
    try {
      const { id } = req.params;
      const result = await model.findOne({ where: { id } });
      const books = await result.getBooks();

      const response = {
        result,
        books: [...books],
      };

      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async store(req, res) {
    try {
      const result = await model.create(req.body);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const updated = await model.update(req.body, {
        where: { id },
      });

      if (updated) {
        const result = await model.findOne({ where: { id } });
        return res.status(200).json(result);
      }

      return res.status(200).json({ message: `author ${id} not found` });
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async destroy(req, res) {
    try {
      const { id } = req.params;
      const deleted = await model.destroy({ where: { id } });

      if (deleted) {
        return res.status(200).json({ message: `author ${id} was deleted` });
      }

      return res.status(200).json({ message: `author ${id} not found` });
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async restore(req, res) {
    try {
      const { id } = req.params;
      const restored = await model.restore({ where: { id } });

      if (restored) {
        return res.status(200).json({ message: `author ${id} was restored` });
      }

      return res.status(200).json({ message: `author ${id} not found` });
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async getBooks(req, res) {
    try {
      const { id } = req.params;
      const author = await model.findOne({ where: { id } });
      const books = await author.getBooks();
      return res.status(200).json(books);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

module.exports = UserController;
