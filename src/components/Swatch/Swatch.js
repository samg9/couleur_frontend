import React from 'react'
import './Swatch.css'
const Swatch = ({ hexes }) => {
    return (
        <div >
            <section className="swatch"><a title="Color palette k8">
                <figure className="swatch--color" style={{ 'backgroundColor': '#df6cf5', 'width': '20%', 'display': 'inline-block', 'borderRadius': '0.75vw 0 0', 'marginLeft': '0px' }}></figure>
                <figure className="swatch--color" style={{ 'backgroundColor': '#ca8558', 'width': '21%', 'display': 'inline-block' }}></figure>
                <figure className="swatch--color mediocolor" style={{ 'backgroundColor': '#625aa2', 'width': '21%', 'display': 'inline-block' }}></figure>
                <figure className="swatch--color" style={{ 'backgroundColor': '#64c04b', 'width': '21%', 'display': 'inline-block' }}></figure>
                <figure className="swatch--color swatch-colormin" style={{ 'backgroundColor': '#f7c474', 'width': '20.4%', 'display': 'inline-block', 'borderRadius': '0 0.75vw 0 0' }}></figure>
            </a><figcaption className="swatch--meta"><a href="/palette/683/k8" title="Color palette k8">
            </a><a style={{ 'fontSize': '16px', 'fontWeight': '600', 'color': 'black' }}>kkk</a>
                </figcaption>
            </section>
        </div>

    );
}
export default Swatch;
