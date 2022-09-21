import { baseUrl, authHeaders } from 'pages/api/base'
import { fetchUser } from './users';

export const fetchBooks = () => {
  const books = fetch(`${baseUrl()}/api/books`, {
    method: "get",
    headers: { 
      "Content-Type": "application/json",
      ...authHeaders() 
    },
  }).then((res) => {
    return res.json()
  })
  
  const accessBooks = async () => {
    const data = await books;
    return data 
  };
  
  return { books: accessBooks() }
}

export const fetchReadingList = () => {
  const list = fetch(`${baseUrl()}/api/reading_list`, {
    method: "get",
    headers: { 
      "Content-Type": "application/json",
      ...authHeaders() 
    },
  }).then((res) => {
    return res.json()
  })

  const accessList = async () => {
    const data = await list;
    return data 
  };
  
  return { books: accessList() }
}

export const addToReadingList = (bookId: number, userId: number) => {
  const date = new Date()
  fetch(`${baseUrl()}/api/list_items`, {
    method: "post",
    headers: { 
      "Content-Type": "application/json",
      ...authHeaders() 
    },
    body: JSON.stringify({
      list_item: {
        book_id: bookId,   
        user_id: userId,
        notes: "",      
        rating: 0,      
        start_date: date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate(),  
        finish_date: null, 
      },
    }),
  }).then((res) => {
    return res.data
  })
}

export const removeToReadingList = (bookId: number) => {
  const date = new Date()
  fetch(`${baseUrl()}/api/list_items/${bookId}`, {
    method: "delete",
    headers: { 
      "Content-Type": "application/json",
      ...authHeaders() 
    },
  }).then((res) => {
    return res.data
  })
}

export const fetchFinishedBooks = () => {
  const finished = fetch(`${baseUrl()}/api/finished`, {
    method: "get",
    headers: { 
      "Content-Type": "application/json",
      ...authHeaders() 
    },
  }).then((res) => {
    return res.json()
  })

  const accessFinished = async () => {
    const data = await finished;
    return data 
  };
  
  return { books: accessFinished() }
}

export const addToFinishedBooks = (bookId: number) => {
  const date = new Date()
  fetch(`${baseUrl()}/api/list_items/${bookId}`, {
    method: "put",
    headers: { 
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      ...authHeaders() 
    },
    body: JSON.stringify({
      list_item: {
        finish_date: date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate(),
      },
    }),
  }).then((res) => {
    return res.data
  })
}

export const removeToFinishedBooks = (bookId: number) => {
  const date = new Date()
  fetch(`${baseUrl()}/api/list_items/${bookId}`, {
    method: "put",
    headers: { 
      "Content-Type": "application/json",
      ...authHeaders() 
    },
    body: JSON.stringify({
      list_item: {
        finish_date: null,
      },
    }),
  }).then((res) => {
    return res.data
  })
}
