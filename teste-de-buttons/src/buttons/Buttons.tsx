import { FC, PropsWithChildren, useState } from 'react'
import './buttons.css'

const Icon: FC<PropsWithChildren> =
    ({ children }) => (
        <i className='material-symbols-outlined'>
            {children}
        </i>
    )

export const Button = () => {
    const [isOpen, setIsOpen] =
        useState<boolean>(false)

    return (
        <div className={`fab ${isOpen ? 'open' : ''}`}>
            <button onClick={() => setIsOpen(!isOpen)}>
                <Icon>add</Icon>
            </button>
            <div className="menu">
                <button>
                    <Icon>person_add</Icon>
                    <span>Add Users</span>
                </button>

            </div>
        </div>
    )
}
