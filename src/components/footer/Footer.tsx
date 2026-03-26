
import  './footer.css'
export const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer-group">
                <div>
                    <h3>About project</h3>
                    <p>Movie search application built with React and TypeScript.</p>
                </div>

                {/* Links */}
                <div>
                    <h3>Useful links</h3>
                    <ul>

                    </ul>
                </div>

                {/* API */}
                <div>
                    <h3>API</h3>
                    <p className="text-min">
                        This product uses the TMDB API but is not endorsed or certified by TMDB.
                    </p>
                </div>

            </div>

            {/* Bottom line */}
            <div className="border-t border-gray-700 text-center text-sm py-4">
                © 2026 MaryByr
            </div>

        </footer>
    );

}
