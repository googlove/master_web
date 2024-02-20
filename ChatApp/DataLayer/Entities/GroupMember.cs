using System.ComponentModel.DataAnnotations;

namespace DataLayer.Entities
{
    public abstract class GroupMember
    {
        [Key]
        public int Id { get; set; }
        public Group? Group { get; set; }
        public User? User { get; set; }
    }
}
