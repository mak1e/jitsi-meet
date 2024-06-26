import { Theme } from '@mui/material';
import React, { ReactNode } from 'react';
import { makeStyles } from 'tss-react/mui';

import ContextMenuItem, { Props as ItemProps } from './ContextMenuItem';


type Props = {

    /**
     * List of actions in this group.
     */
    actions?: Array<ItemProps>;

    /**
     * The children of the component.
     */
    children?: ReactNode;
};

const useStyles = makeStyles()((theme: Theme) => {
    return {
        contextMenuItemGroup: {
            '&:not(:empty)': {
                padding: `${theme.spacing(2)} 0`
            },

            '& + &:not(:empty)': {
                borderTop: `1px solid ${theme.palette.ui04}`
            },

            '&:first-of-type': {
                paddingTop: 0
            },

            '&:last-of-type': {
                paddingBottom: 0
            }
        }
    };
});

const ContextMenuItemGroup = ({
    actions,
    children
}: Props) => {
    const { classes: styles } = useStyles();

    return (
        <div className = { styles.contextMenuItemGroup }>
            {children}
            {actions?.map(actionProps => (
                <ContextMenuItem
                    key = { actionProps.text }
                    { ...actionProps } />
            ))}
        </div>
    );
};

export default ContextMenuItemGroup;
