const template = document.createElement('template');
template.innerHTML = `
    <style>

        label {
            font-weight: bold;
        }

        textarea {
            resize: none;
        }

        .form-control {
            border-radius: 5px;
            display: block;
            margin-bottom: 10px;
            padding: 10px;
            width: 100%;
        }

        .form-group {
            width: 80%;
        }

        #submitBtn {
            border-radius: 5px;
            font-size: 20px;
            padding: 10px;
        }
    </style>
    <form id="emailForm" onsubmit="return false">
        <div class="form-group">
            <label for="email">Email:</label>
            <input id="email" type="text" class="form-control" readonly name="email">
        </div>
        <div class="form-group">
            <label for="subject">Subject:</label>
            <input id="subject" type="text" class="form-control" placeholder="Type a subject ..." required>
        </div>
        <div class="form-group">
            <label for="message">Message:</label>
            <textarea rows="5" id="message" class="form-control" placeholder="Type a message ..." required></textarea>
        </div>
        <button id="submitBtn" type="submit">Enviar!</button>
    </form>
    </div>
`

export class EmailForm extends HTMLElement {
    constructor() {
        super();
        this.showInfo = false;
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    
    set email(newValue) {
        this.shadowRoot.querySelector('#email').setAttribute('value', newValue);
        this.setAttribute('email', newValue);
    }

    get email() {
        return this.getAttribute('email');
    }

    get subject() {
        return this.shadowRoot.querySelector('#subject').value;
    }

    get message() {
        return this.shadowRoot.querySelector('#message').value;
    }


    set submitted(callback) {
        this.shadowRoot.querySelector('#submitBtn')
            .addEventListener('click', () => {
                const msgToSend = {
                    email: this.email,
                    subject: this.subject,
                    message: this.message
                };
                callback(msgToSend);
            });
    }

    disconnectedCallback() {
        this.shadowRoot.querySelector('#submitBtn')
            .removeEventListener();
    }

}

if (!window.customElements.get('email-form')) {
    window.customElements.define('email-form', EmailForm);
}