import React from 'react';
import './sectionheader.css';

function SectionHeader ({title, nav}) {
    return  <h2 className="section-title" id={nav}>{title}</h2>
}

export default SectionHeader;