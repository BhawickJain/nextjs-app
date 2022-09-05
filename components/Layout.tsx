import styles from './layout.module.css'

interface LayoutProps {
    children: JSX.Element
}

/*
To use this container class inside components/layout.js, you need to:
 - Import the CSS file and assign a name to it, like styles
 - Use styles.container as the className

 This is what CSS Modules does: It automatically generates unique
 class names. As long as you use CSS Modules, you don’t have to worry
 about class name collisions.
*/

export default function Layout({ children }: LayoutProps) {
    return <div className={styles.container}>{children}</div>
}