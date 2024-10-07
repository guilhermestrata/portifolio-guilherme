import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4 mt-8 h-64">
            <div className="flex justify-center mt-16 space-x-4">
                <a href="https://github.com/guilhermestrata" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="h-6 w-6 hover:text-gray-500 transition duration-200" />
                </a>
                <a href="https://www.linkedin.com/in/guilherme-arendt-bb19931aa/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6 hover:text-blue-600 transition duration-200" />
                </a>
            </div>
            <p className="text-center mt-2">© 2024 Guilherme Arendt. Todos os direitos reservados.</p>
        </footer>
    );
}
