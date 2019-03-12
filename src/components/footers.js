import React, { Component } from 'react';
import { Footer, FooterSection, FooterLinkList } from 'react-mdl';
import { Link } from 'react-router-dom';

class Footers extends Component {
    render() {
        return(
            <Footer size="mini">
                <FooterSection type="left" logo="DRM">
                <FooterLinkList>
                    <Link to="/help">Help</Link>
                    <Link to="/privacyTerms">Privacy & Terms</Link>
                 </FooterLinkList>
                 </FooterSection>
            </Footer>
        )
    }
}

export default Footers;