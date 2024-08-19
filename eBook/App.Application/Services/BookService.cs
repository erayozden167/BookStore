using App.Domain.Dtos;
using App.Domain.Entities;
using App.Infrastructure.Repository;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.Application.Services
{
    public class BookService
    {
        private readonly BookRepository _bookRepository;
        public BookService(BookRepository bookRepository)
        {
            _bookRepository = bookRepository;
        }
        public async Task<IEnumerable<BookDto>> ListBookAsync()
        {
            var books = await _bookRepository.ListBookAsync();
            if (books.IsNullOrEmpty())
            {
                return new List<BookDto>();
            }
            // Kitapları DTO'ya dönüştür
            return books.Select(book => new BookDto
            {
                Id = book.Id,
                Title = book.Title,
                Author = book.Author,
                PublishedDate = book.PublishedDate
            }).ToList();
        }

        public async Task<BookDto?> FromIdAsync(int id)
        {
            Book? book = await _bookRepository.FromIdAsync(id);
            if (book == null)
            {
                return null;
            }
            BookDto responseBook = new BookDto
            {
                Id = book.Id,
                Title = book.Title,
                Author = book.Author,
                PublishedDate = book.PublishedDate
            };
            return responseBook;
        }
        public async Task<BookDto?> AddBookAsync(BookDto reguest)
        {
            Book book = new Book
            {
                Title = reguest.Title,
                Author = reguest.Author,
                Price = reguest.Price,
                PublishedDate = reguest.PublishedDate,
                UploadTime = DateTime.Now,
                Status = true
            };
            Book? response = await _bookRepository.AddBookAsync(book);
            if (response == null)
            {
                return null;
            }
            BookDto responseDto = new BookDto
            {
                Id = response.Id,
                Title = response.Title,
                Author = response.Author,
                PublishedDate = response.PublishedDate
            };
            return responseDto;
        }
        public async Task<BookDto?> UpdateBookAsync(BookDto reguest)
        {

            Book book = new Book
            {
                Id = reguest.Id,
                Title = reguest.Title,
                Author = reguest.Author,
                Price = reguest.Price,
                PublishedDate = reguest.PublishedDate,
                UpdateTime = DateTime.Now
            };
            Book? response = await _bookRepository.UpdateBookAsync(book);
            if (response == null)
            {
                return null;
            }

            return reguest;
        }
        public async Task<bool> DeleteBookAsync(int id)
        {
            bool response = await _bookRepository.DeleteBookAsync(id);
            if (!response)
            {
                return false;
            }
            return true;
        }
    }
}
