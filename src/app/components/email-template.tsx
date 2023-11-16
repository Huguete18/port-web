interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, laborum facere! Mollitia beatae facilis eligendi rem, maxime ducimus, inventore architecto fugiat dignissimos quam provident, itaque quibusdam neque amet? Optio, alias.</p>
    
    <button className="bgsk-500 px-3 py-2">
        <a href='https://google.com/'>Go to Fazweb</a>
    </button>
  </div>
);
