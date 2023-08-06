import axios from 'axios';

const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/todos'); // Replace with your API endpoint
      return response.data;
    } catch (error) {
      console.error('Error fetching todos:', error);
      return 
    }
  };
export default fetchTodos;