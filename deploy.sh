#!/bin/bash
BUCKET='www.gabrieladutra.com'

aws s3 rm s3://$BUCKET --recursive
aws s3 cp dist s3://$BUCKET --recursive
aws cloudfront create-invalidation --distribution-id E1XP1VN7BGCVA4 --paths '/*' --no-cli-pager