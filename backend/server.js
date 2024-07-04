// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const ADMIN_API_KEY = process.env.ADMIN_API_KEY;

const authenticate = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey && apiKey === ADMIN_API_KEY) {
    next();
  } else {
    res.status(403).json({ error: 'Forbidden' });
  }
};


let cards = [
    {
        "id": 0,
        "title": "ASF/AF",
        "description": "Shortened version of 'as fuck.'",
        
       
    },
    {
        "id": 1,
        "title": "ASL",
        "description": "Shortened version of 'as hell.'",
        
       
    },
    {
        "id": 2,
        "title": "I oop",
        "description": "Used to express shock, embarrassment, and or amusement. ",
        
       
    },
    {
        "id": 3,
        "title": "Iykyk",
        "description": "Acronym for 'If you know, you know.'' Used to describe inside jokes.",
        
       
    },
    
    {
        "id": 4,
        "title": "Karen",
        "description": "Pejorative term often describing an obnoxious, angry, or entitled White woman.",
        
       
    },
    {
        "id": 5,
        "title": "Rizz ",
        "description": "One's charm/seduction skills.",
        
       
    },
    {
        "id": 6,
        "title": "Salty",
        "description": "Used to describe someone who is behaving or expressing themselves in a resentful, bitter, or irritated manner.",
        
       
    },
    {
        "id": 7,
        "title": "Sksksk",
        "description": "Used to convey happiness/laughter.",
        
       
    },
    {
        "id": 8,
        "title": "Drip",
        "description": "Trendy high-class fashion.",
        
       
    },
    {
        "id": 9,
        "title": "Clapback",
        "description": "When a person or subject is 'Cooked' (As an adjective), it's the state of being in any sort of danger, physical, emotional, of failure, or of reputation. Can be used in a similar fashion to 'Doomed'. It can also mean to have been humiliated, embarrassed, or messed up in some way.",
        
       
    },
    {
        "id": 10,
        "title": "Delulu",
        "description": "Used to describe someone who holds unrealistic or overly idealistic beliefs, especially in the realm of relationships.",
        
       
    },
    {
        "id": 11,
        "title": "Gaslight",
        "description": "Manipulating someone into questioning their own perception of reality.",
        
       
    },
    {
        "id": 12,
        "title": "It's giving",
        "description": "Describe the attitude or connotation of something or someone. Can also be used to give general admiration toward something.",
        
       
    },
    {
        "id": 13,
        "title": "Extra",
        "description": "Someone or something that is over-the-top, excessive, or dramatic in behavior, appearance, or actions.",
        
       
    },
    {
        "id": 14,
        "title": "Secure the bag",
        "description": "Working to reach your goals, usually referring to making money.",
        
       
    },
    {
        "id": 15,
        "title": "Zesty",
        "description": "Effeminately or flamboyantly gay.",
        
       
    },
    {
        "id": 16,
        "title": "Yap",
        "description": "To talk too much; To say many words without the words meaning anything.",
        
       
    },
    {
        "id": 17,
        "title": "Understood the assignment",
        "description": "To understand what was supposed to be done; to do something well.",
        
       
    },
    {
        "id": 18,
        "title": "Snatched",
        "description": "Amazing, attractive, or flawlessly styled.",
        
       
    },
    {
        "id": 19,
        "title": "Tea",
        "description": "Gossiping (spilling the tea).",
        
       
    },
    {
        "id": 20,
        "title": "Touch grass",
        "description": "A way of telling someone to 'go outside', usually after said person is believed to have been on social media for too long.",
        
       
    },
    {
        "id": 21,
        "title": "Oomf",
        "description": "One of My Followers.",
        
       
    },{
        "id": 22,
        "title": "Lit",
        "description": "Colloquially: 'Enlightened', 'Hot', 'Fire' The new hotness; something remarkable, interesting, fun or amusing. Generally positive.",
        
       
    },{
        "id": 23,
        "title": "Moot/Moots",
        "description": "Short for 'mutuals' or 'mutual followers'.",
        
       
    },{
        "id": 24,
        "title": "Stan",
        "description": "Supporting something to an extreme degree. Specifically used in cases of overzealous or obsessive support of celebrities.",
        
       
    },{
        "id": 25,
        "title": "Main character",
        "description": "Used to describe someone who is or wants to be the star of their own life. Often used to refer to someone who wants to be the center of attention.",
        
       
    },{
        "id": 26,
        "title": "Slaps",
        "description": "Used to refer to something that is perceived to be good, particularly used when referring to music.",
        
       
    },{
        "id": 27,
        "title": "Sus",
        "description": "Short term for suspect/suspicious.",
        
       
    },
   
];

// Fetch all cards
app.get('/cards', (req, res) => {
    res.json(cards);
  });
  
  // Add a new card
  app.post('/cards', (req, res) => {
    const newCard = req.body;
    newCard.id = cards.length ? cards[cards.length - 1].id + 1 : 0;
    cards.push(newCard);
    res.status(201).json(newCard);
  });
  
  // Delete a card by id
  app.delete('/cards/:id', (req, res) => {
    const { id } = req.params;
    cards = cards.filter(card => card.id != id);
    console.log('Remaining cards:', cards);  // Debug log to check remaining cards
    res.status(204).send();
  });
  
  // Admin interface to delete specific cards by ID
  app.delete('/cards', authenticate, (req, res) => {
    const { ids } = req.body;  // Expecting an array of IDs in the request body
    if (!ids || !Array.isArray(ids)) {
      return res.status(400).json({ error: 'Invalid request format. Expected an array of IDs.' });
    }
    
    const initialLength = cards.length;
    cards = cards.filter(card => !ids.includes(card.id));
    const deletedCount = initialLength - cards.length;
    
    console.log('Deleted card IDs:', ids);
    console.log('Remaining cards:', cards);
  
    res.json({ message: `${deletedCount} card(s) deleted.` });
  });
  
  // Serve static files from the current directory
  app.use(express.static(path.join(__dirname, 'backend')));
  
  // Serve the admin interface
  app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'backend', 'admin.html'));
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });









