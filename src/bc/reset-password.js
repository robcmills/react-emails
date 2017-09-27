import React from 'react';

import EmailBtn from './email-btn'

const ResetPassword = () => (
	<table>
		<tbody>
			<tr>
				<td>
					<h5>Hello <b>{'{{user.firstName}} {{user.lastName}},'}</b></h5>
					<h5>Please use the link below to reset your BuildingConnected password.</h5>
					<h1>LITMUS</h1>
				</td>
			</tr>
			<tr>
				<td style={{ height: '20px' }}></td>
			</tr>
			<tr>
				<td align="center">
					<EmailBtn
						bgcolor={'#31708F'}
						color="#FFFFFF"
						href="{{&url}}"
					>
						Reset my password
					</EmailBtn>
				</td>
			</tr>
		</tbody>
	</table>
)

export default ResetPassword
