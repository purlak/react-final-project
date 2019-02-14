class BooksController < ApplicationController

  def create
    # binding.pry
    book = Book.new(book_params)
    if book.save
      render json: book
    end
  end

  private
  def book_params
    params.require[:book].permit(:title, :author, :publisher, :imageLinks)
  end
end
