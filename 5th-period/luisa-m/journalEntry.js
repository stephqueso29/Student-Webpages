// setting constants for the title, entry, and journal heading by getting element id from html
const titleBox = document.getElementById('title-box');
const entryBox = document.getElementById('entry-body');
const heading = document.getElementById('journal-heading');

// setting today's date next to the journal heading
const today = new Date().toLocaleDateString();
heading.textContent = `Today's Journal  ${today}`;

// this allowes saved title and journal entry to load from the local storage 
window.addEventListener('DOMContentLoaded', () => {
  titleBox.value = localStorage.getItem('journalTitle') || '';
  entryBox.value = localStorage.getItem('journalContent') || '';
  displayEntries(); // function is called to display previously saved entries
});

// this saves the users title to the local storage 
titleBox.addEventListener('input', () => {
  localStorage.setItem('journalTitle', titleBox.value);
});

// this saves the users journal entry / content to the local storage 
entryBox.addEventListener('input', () => {
  localStorage.setItem('journalContent', entryBox.value);
});

// this funtion allows a journal entry to be saved to the local storage
function saveEntry() {
  const title = titleBox.value.trim();
  const content = entryBox.value.trim();
  const timestamp = new Date().toLocaleString();

  // this if staement checks if the title box or content box is filled out, otherwise, it will display a message fr the user to input something
  if (!title) {
    alert('Please enter a title!');
    return;
  }
  if (!content) {
    alert('You must write something in your journal first!');
    return;
  }

  const entry = { title, content, timestamp };
  const entries = JSON.parse(localStorage.getItem('journalEntries')) || [];

  // this adds the newly saved entry to the beginning of the entries sidebar
  entries.unshift(entry);
  localStorage.setItem('journalEntries', JSON.stringify(entries));

  // after the journal entry is saved to the sidebar, the title box and content box will reset to be cleared, ready for the next journal entry
  titleBox.value = '';
  entryBox.value = '';
  localStorage.removeItem('journalTitle');
  localStorage.removeItem('journalContent');

  displayEntries(); // the saved entries list will be refresehed 
}

// for the erase function, this will clear out whatever is typed in the title and entry box
function eraseEntry() {
  titleBox.value = '';
  entryBox.value = '';
  localStorage.removeItem('journalTitle');
  localStorage.removeItem('journalContent');
}

// this funtion deletes or gets rid of the saved entry that was in the sidebar, it wont be saved to the locoal storage anymore
function deleteEntry(index) {
  const entries = JSON.parse(localStorage.getItem('journalEntries')) || [];
  entries.splice(index, 1); // Remove the selected entry
  localStorage.setItem('journalEntries', JSON.stringify(entries));
  displayEntries(); // the saved entries list will be refresehed 
}

// this function displays all saved journal entries in the sidebar list 
function displayEntries() {
  const entries = JSON.parse(localStorage.getItem('journalEntries')) || [];
  const list = document.getElementById('entries-list');
  list.innerHTML = ''; // Clear previous entries

  // this adds the saved entry to the sidebar list 
  entries.forEach((entry, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${entry.title || '(Untitled)'}</strong><br>
      <div class="journal-preview">${entry.content}</div>
      <small>${entry.timestamp}</small><br>
      <button onclick="deleteEntry(${index})">Delete</button>
    `;
    li.style.cursor = 'pointer';

    // when the user clicks on one of the saved entires, all inputs wil load back into the editor box 
    li.addEventListener('click', () => loadEntry(index));
    list.appendChild(li);
  });
}

// when the saved entry is loaded back into the editor, it will be removed from the sidebar list 
function loadEntry(index) {
  const entries = JSON.parse(localStorage.getItem('journalEntries')) || [];
  const entry = entries[index];

  if (!entry) return;

  // this will order the Populate the input boxes with the selected entry's data
  titleBox.value = entry.title;
  entryBox.value = entry.content;

  // in the locoal storage, it will temporarily save the loaded entry
  localStorage.setItem('journalTitle', entry.title);
  localStorage.setItem('journalContent', entry.content);

  // this removes the loaded entry from the saved list to avoid duplicates on re-save
  entries.splice(index, 1);
  localStorage.setItem('journalEntries', JSON.stringify(entries));

  displayEntries(); // the saved entries list will be refresehed
}

