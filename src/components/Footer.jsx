import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-center py-4 text-sm text-gray-500">
      &copy; {new Date().getFullYear()} MyStore. All rights reserved.
    </footer>
  );
};

export default Footer;
