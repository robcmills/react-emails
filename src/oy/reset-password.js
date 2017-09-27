import React from 'react';

import EmailBtn from './email-btn'
import { Table, TBody, TR, TD } from 'oy-vey'

const ResetPassword = () => (
	<Table>
		<TBody>
			<TR>
				<TD>
					<h5>Hello <b>{'{{user.firstName}} {{user.lastName}},'}</b></h5>
					<h5>Please use the link below to reset your BuildingConnected password.</h5>
				</TD>
			</TR>
			<TR>
				<TD style={{ height: '20px' }}></TD>
			</TR>
			<TR>
				<TD align="center">
					<EmailBtn
						bgcolor={'#31708F'}
						color="#FFFFFF"
						href="{{&url}}"
					>
						Reset my password
					</EmailBtn>
				</TD>
			</TR>
		</TBody>
	</Table>
)

export default ResetPassword
