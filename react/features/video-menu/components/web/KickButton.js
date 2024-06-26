/* @flow */

import React from 'react';

import { translate } from '../../../base/i18n';
import { IconCloseCircle } from '../../../base/icons';
import { connect } from '../../../base/redux';
import ContextMenuItem from '../../../base/ui/components/web/ContextMenuItem';
import AbstractKickButton, {
    type Props
} from '../AbstractKickButton';

/**
 * Implements a React {@link Component} which displays a button for kicking out
 * a participant from the conference.
 *
 * NOTE: At the time of writing this is a button that doesn't use the
 * {@code AbstractButton} base component, but is inherited from the same
 * super class ({@code AbstractKickButton} that extends {@code AbstractButton})
 * for the sake of code sharing between web and mobile. Once web uses the
 * {@code AbstractButton} base component, this can be fully removed.
 */
class KickButton extends AbstractKickButton {
    /**
     * Instantiates a new {@code Component}.
     *
     * @inheritdoc
     */
    constructor(props: Props) {
        super(props);

        this._handleClick = this._handleClick.bind(this);
    }

    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        const { participantID, t } = this.props;

        return (
            <ContextMenuItem
                accessibilityLabel = { t('videothumbnail.kick') }
                className = 'kicklink'
                icon = { IconCloseCircle }
                id = { `ejectlink_${participantID}` }
                // eslint-disable-next-line react/jsx-handler-names
                onClick = { this._handleClick }
                text = { t('videothumbnail.kick') } />
        );
    }

    _handleClick: () => void;
}
export default translate(connect()(KickButton));
