import React from 'react';
import { Link } from 'react-router-dom';
import {flatDeep, slugify, containsObject} from '../../../utils';
import BlogData from "../../../data/blog/BlogData.json";
const PUBLIC_URL = import.meta.env.VITE_API_URL;


const WidgetCategory = () => {

    const cats = BlogData.map(data => {
        return data.category;
    });


    let singleCatArray = flatDeep(cats);
    let categories = [];
    singleCatArray.forEach(cat => {
        const obj = {
            title: cat.trim(),
            slug: slugify(cat),
            count: 1
        }
        const objIndex = containsObject(obj, categories);
        if(objIndex !== -1){
            const prevCount = categories[objIndex].count;
            categories[objIndex] = {
                title: cat.trim(),
                slug: slugify(cat),
                count: prevCount + 1
            }
        } else {
            categories.push(obj);
        }
    })

    return (
        <ul className="category-list list-unstyled">
            {categories.map((data) =>(
                <li key={data.slug}>
                    <Link to={PUBLIC_URL + `/category/${data.slug}`}>{data.title}</Link>
                </li>
            ))}
        </ul>
    )
}

export default WidgetCategory;