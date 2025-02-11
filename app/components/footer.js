import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <div>
    <footer className="py-8 border-t border-gray-700">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center">
          <h4 className="text-xl font-bold mb-4">Let's Connect</h4>
          <div className="flex justify-center gap-6 mb-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} className="hover:text-gray-400" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} className="hover:text-gray-400" />
            </a>
          </div>
          <p className="text-gray-400">mattfrayser@gmail.com</p>
        </div>
        <div className="mt-8 text-center text-gray-500">
          <p>© 2024 | Matt Frayser</p>
        </div>
      </div>
    </footer>
    </div>
  );
}