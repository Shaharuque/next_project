import React from 'react';
import styles from "./Trading.module.css";


const TradingFAQ = () => {
    return (
        <div className={styles.trading_div}>
            <div>
                <h1 className={styles.title}>Tranding Conditions and a safe Experience</h1>
                <p className={styles.paragraph}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque est cupiditate amet culpa, quam deserunt vero inventore ipsam harum praesentium esse quis maxime quo, necessitatibus debitis delectus officia incidunt voluptatibus eum molestias quaerat quibusdam magni. Ea possimus nobis odio consequuntur. Modi explicabo debitis quasi dolor quaerat molestias excepturi, architecto possimus autem optio, earum molestiae obcaecati ratione dicta fuga officiis deserunt eius repudiandae ut. A placeat repellendus ab suscipit quas aperiam officiis illo in temporibus odio autem repellat, quam dolor omnis quia aut eligendi error, esse qui corrupti. Vero, ea accusamus eveniet impedit voluptatem iusto quisquam tempora voluptatum suscipit illum magni libero. Minus est quisquam alias voluptas dolorum dicta labore ipsa repudiandae illo, ex iure repellat eaque! At laborum rerum saepe quia dignissimos aut nesciunt numquam suscipit. Aliquam consequuntur illo possimus officia esse quisquam vitae adipisci eveniet enim id ad sapiente iure nam perferendis labore cum ipsam voluptates, quasi voluptatibus necessitatibus.</p>
                <div className={styles.btn}>
                <button>For More Details</button>
                </div>
            </div>
            <div>
                <div className={styles.imageStyle}>
                    <img
                        src="https://www.moneyweb.co.za/wp-content/uploads/2014/10/AdobeStock_275842087-555x370.jpeg"
                        alt="Avatar"
                        style={{ width: "100%", borderRadius: "5px" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default TradingFAQ;