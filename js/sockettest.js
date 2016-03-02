var socket = io.connect('http://localhost:7890', { 'forceNew': true });

socket.on('messages', function(data) {  
  console.log(data);
  render(data);
})

function render (data) {  
  var html = data.map(function(elem, index) {
    return(`<li>
              <strong>${elem.author}</strong>:
              <em>${elem.text}</em>
            </li>`);
  }).join(" ");

  document.getElementById('messages').innerHTML = html;
}

function addMessage() {  
  var message = {
    author: document.getElementById('username').value,
    text: document.getElementById('texto').value
  };

  socket.emit('new-message', message);
  return false;
}