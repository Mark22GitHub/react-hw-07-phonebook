import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";
import { changeFilter } from "../../redux/contacts/contacts-actions";
import { getFilter } from "../../redux/contacts/contacts-selectors";

const Filter = ({ value, onChange }) => {
  return (
    <>
      <label className={styles.filter}>
        Find contact by name
        <input
          className={styles.input}
          type="text"
          value={value}
          onChange={onChange}
        ></input>
      </label>
    </>
  );
};

const mapStateToProps = (state) => ({
  value: getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(changeFilter(e.target.value)),
});

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
