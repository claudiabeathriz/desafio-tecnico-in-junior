// Exercício 05: Livros por Categoria
/* Implemente uma função chamada countBooksInCategory que conte
o número de livros em cada categoria e retorne um objeto com o
nome da categoria como chave e a contagem de livros como valor.
*/

const booksByCategory = [
  {
	category: "Romance",
	books: [
	  {
		title: "O Sol Também é Uma Estrela",
		author: "Nicola Yoon"
	  },
	  {
		title: "O Noivo da Minha Melhor Amiga",
		author: "Emily Gin"
	  },
	  {
		title: "Orgulho e Preconceito",
		author: "Jane Austen"
	  }
	]
  },
  {
	category: "Fantasia",
	books: [
	  {
		title: "Harry Potter e a Pedra Filosofal",
		author: "J.K. Rowling"
	  },
	  {
		title: "O Hobbit",
		author: "J.R.R. Tolkien"
	  },
	  {
		title: "Eragon",
		author: "Christopher Paolini"
	  },
	  {
		title: "O Nome do Vento",
		author: "Patrick Rothfuss"
	  }
	]
  },
  {
	category: "Suspense",
	books: [
	  {
		title: "A Garota no Trem",
		author: "Paula Hawkins"
	  },
	  {
		title: "O Silêncio dos Inocentes",
		author: "Thomas Harris"
	  }
	]
  },
  {
	category: "Ficção Científica",
	books: [
	  {
		title: "Duna",
		author: "Frank Herbert"
	  },
	  {
		title: "Neuromancer",
		author: "William Gibson"
	  },
	  {
		title: "Fundação",
		author: "Isaac Asimov"
	  },
	  {
		title: "1984",
		author: "George Orwell"
	  },
	  {
		title: "O Fim da Infância",
		author: "Arthur C. Clarke"
	  }
	]
  }
];

function countBooksInCategory(categories) {
  const bookCount = {};
    for (const category of categories) {
        bookCount[category.category] = category.books.length;
    }
    return bookCount;
}

console.log(countBooksInCategory(booksByCategory));
