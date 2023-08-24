import React from 'react';
import '../style.css';
// import './TagFilter.css';
import styled from '@emotion/styled';


const TextArea = styled.textarea``;
const Input = styled.input``;

const TagFilter = ((props) => {

  const {
    expandFilters, 
    selectedFilter,
    handleFilterExpand, 
    handleFilterSubmit, 
    handleFilterClear,
    onChange
  } = props;

  // switch statement which uses tag state property to determine which radio button should be selected when a problem is opened
  let recursionChecked, oopChecked, closureChecked, hofChecked, llChecked, asyncChecked, bstChecked = false;
  switch(selectedFilter) {
    case 'recursion': 
        recursionChecked = true;
        break;
    case 'oop': 
        oopChecked = true;
        break;
    case 'closure': 
        closureChecked = true;
        break;
    case 'hof': 
        hofChecked = true;
        break;
    case 'll': 
        llChecked = true;
        break;
    case 'async': 
        asyncChecked = true;
        break;
    case 'bst': 
        bstChecked = true;
        break;
    default:
        break;
    
  }

  // if expandFilters is false, just render the Show/Hide Filters button
  if(!expandFilters) {
    return (
        <div className="hidden-filters">
            <button className="show-filters" onClick={handleFilterExpand}>Show/Hide Filters</button>
        </div>
    )
  }
  // if expandFilters is true, render the Show/Hide Filters button, the seven tag radio buttons, and the Confirm Filter and Reset Filter buttons
  else {
    return (
            <div className="showing-filters">
                <button className="show-filters" onClick={handleFilterExpand}>Show/Hide Filters</button>
                <form onSubmit={handleFilterSubmit} className="tag-filters">
                    <fieldset>
                        <legend>Choose a tag:</legend>

                        <div>
                            <input type="radio" id="recursion-tag" name="tag-radio" value="recursion" checked={recursionChecked} onChange={(e) => onChange(e.target.value)} />
                            <label for="recursion-tag">Recursion</label>
                        </div>

                        <div>
                            <input type="radio" id="oop-tag" name="tag-radio" value="oop" checked={oopChecked} onChange={(e) => onChange(e.target.value)} />
                            <label for="oop-tag">Object Oriented Programming (OOP)</label>
                        </div>

                        <div>
                            <input type="radio" id="closure-tag" name="tag-radio" value="closure" checked={closureChecked} onChange={(e) => onChange(e.target.value)} />
                            <label for="closure-tag">Closure</label>
                        </div>

                        <div>
                            <input type="radio" id="hof-tag" name="tag-radio" value="hof" checked={hofChecked} onChange={(e) => onChange(e.target.value)} />
                            <label for="hof-tag">Higher Order Function</label>
                        </div>

                        <div>
                            <input type="radio" id="ll-tag" name="tag-radio" value="ll" checked={llChecked} onChange={(e) => onChange(e.target.value)} />
                            <label for="ll-tag">Linked List</label>
                        </div>

                        <div>
                            <input type="radio" id="async-tag" name="tag-radio" value="async" checked={asyncChecked} onChange={(e) => onChange(e.target.value)} />
                            <label for="async-tag">Async</label>
                        </div>

                        <div>
                            <input type="radio" id="bst-tag" name="tag-radio" value="bst" checked={bstChecked} onChange={(e) => onChange(e.target.value)} />
                            <label for="bst-tag">Binary Search Tree (BST)</label>
                        </div>
                        <button className="filter-submit" type="submit">Confirm Filter</button>
                    </fieldset>
                </form>
                <button className="filter-clear" onClick={handleFilterClear}>Clear Filter</button>
            </div>
        )
  }
 
}
);

export default TagFilter;