using App.Domain.Entities;
using App.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking.Internal;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.Infrastructure.Repository
{
    public class BookRepository
    {
        private readonly ApplicationDbContext _bookContext;
        public BookRepository(ApplicationDbContext context)
        {
            _bookContext = context;
        }
        public async Task<IEnumerable<Book>> ListBookAsync()
        {
            List<Book> books = await _bookContext.Books.Where(x => x.Status == true).ToListAsync();

            if (books.IsNullOrEmpty())
            {
                return new List<Book>();
            }
            return books;
        }
        public async Task<Book?> FromIdAsync(int id)
        {
            Book? entity = await _bookContext.Books.FindAsync(id);
            if (entity == null || !entity.Status)
            {
                return null;
            }
            return entity;
        }
        public async Task<Book?> AddBookAsync(Book book)
        {
            try
            {
                await _bookContext.Books.AddAsync(book);
                await _bookContext.SaveChangesAsync();
                return book;
            }
            catch
            {
                return null;
            }
            
        }
        public async Task<Book?> UpdateBookAsync(Book book)
        {
            try
            {
                Book? entity = await _bookContext.Books.FindAsync(book.Id);

                if (entity == null)
                {
                    return null;
                }

                entity.Title = book.Title;
                entity.Author = book.Author;
                entity.PublishedDate = book.PublishedDate;
                entity.UpdateTime = book.UpdateTime;
                entity.Price = book.Price;

                await _bookContext.SaveChangesAsync();
                return entity;
            }
            catch
            {
                return null;
            }
        }
        public async Task<bool> DeleteBookAsync(int id)
        {
            Book? entity = await _bookContext.Books.FindAsync(id);
            if (entity == null)
            {
                return false;
            }

            entity.Status = false;
            await _bookContext.SaveChangesAsync();
            return true;
        }
    }
}
