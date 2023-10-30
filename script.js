// script.js
document.addEventListener('DOMContentLoaded', function () {
    const emailList = document.getElementById('email-list');
    const emailSubject = document.getElementById('email-subject');
    const emailSender = document.getElementById('email-sender');
    const emailDate = document.getElementById('email-date');
    const emailContent = document.getElementById('email-content');
  
    const emails = [
      {
        subject: 'Email 1',
        sender: 'sender1@example.com',
        date: '2023-10-30',
        content: 'This is the content of Email 1.',
      },
      {
        subject: 'Email 2',
        sender: 'sender2@example.com',
        date: '2023-10-31',
        content: 'This is the content of Email 2.',
      },
      // Add more email objects here
    ];
  
    // Function to populate email content
    function displayEmail(email) {
      emailSubject.textContent = email.subject;
      emailSender.textContent = `Sender: ${email.sender}`;
      emailDate.textContent = `Date: ${email.date}`;
      emailContent.textContent = email.content;
    }
  
    // Function to create email list items
    function createEmailListItem(email, index) {
      const listItem = document.createElement('li');
      listItem.textContent = email.subject;
      listItem.dataset.index = index;
      listItem.classList.add('email-item');
  
      listItem.addEventListener('click', function () {
        const selectedIndex = this.dataset.index;
        emailList.querySelectorAll('.email-item').forEach((item) => {
          item.classList.remove('active');
        });
        this.classList.add('active');
  
        displayEmail(emails[selectedIndex]);
      });
  
      return listItem;
    }
  
    // Populate email list
    emails.forEach((email, index) => {
      const listItem = createEmailListItem(email, index);
      emailList.appendChild(listItem);
    });
  });
  