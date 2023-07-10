import express,{Request,Response} from 'express';
const router = express.Router();
import homecontroller from '../controllers/home';
import addcontrol from '../controllers/addcontroller';
import divcontrol from '../controllers/divcontroller';
import logcontrol from '../controllers/logcontroller';
import mulcontrol from '../controllers/mulaontroller';
import powcontrol from '../controllers/powcontroller';
import sqrtcontrol from '../controllers/sqrtcontroller';
import subcontrol from '../controllers/subcontroller';
import check from '../middleware/checklength';

/**
 * @swagger
 * components:
 *     schemas:
 *          data:
 *            type: object
 *            properties:
 *                  a:
 *                   type: integer
 *                   discription: First Number.
 *                   example: 0
 *                  b:
 *                   type: integer
 *                   discription: Second Number.
 *                   example: 0
 *          data2:
 *             type: object
 *             properties:
 *                   c:
 *                    type: integer
 *                    discription: First Number.
 *                    example: 0
 */


/**
 * @swagger
 * /:
 *   get:
 *     summary: This is home page of our calculator.
 *     description: Home page .
 *     responses:
 *           200:
 *             description: Open Home Page.
 */
router.route("/").get(homecontroller);
/**
 * @swagger
 * /add:
 *    post:
 *      summary: This is addition page of our calculator.
 *      description: Add page .
 *      requestBody:
 *            required: true
 *            content:
 *                 application/json:
 *                    schema:
 *                      type: object
 *                      $ref: '#components/schemas/data/'
 *      responses:
 *            200:
 *              description: Showing the result of addition of numbers.
 *        
 */

router.route("/add").post(check,addcontrol);
/**
 * @swagger
 * /div:
 *    post:
 *      summary: This is division page of our calculator.
 *      description: division page .
 *      requestBody:
 *            required: true
 *            content:
 *                 application/json:
 *                    schema:
 *                      type: object
 *                      $ref: '#components/schemas/data/'
 *      responses:
 *            200:
 *              description: Showing the result of division of numbers.
 *        
 */
router.route("/div").post(check,divcontrol);
/**
 * @swagger
 * /log:
 *    post:
 *      summary: This is Logorthim page of our calculator.
 *      description: logorthim page .
 *      requestBody:
 *            required: true
 *            content:
 *                 application/json:
 *                    schema:
 *                      type: object
 *                      $ref: '#components/schemas/data2/'
 *      responses:
 *            200:
 *              description: Showing the result of logorthim of number.
 *        
 */
router.route("/log").post(logcontrol);
/**
 * @swagger
 * /mul:
 *    post:
 *      summary: This is multiplication page of our calculator.
 *      description: Multiplication page .
 *      requestBody:
 *            required: true
 *            content:
 *                 application/json:
 *                    schema:
 *                      type: object
 *                      $ref: '#components/schemas/data/'
 *      responses:
 *            200:
 *              description: Showing the result of multiplication of numbers.
 *        
 */

router.route("/mul").post(check,mulcontrol);
/**
 * @swagger
 * /pow:
 *    post:
 *      summary: This is Power calculation page of our calculator.
 *      description: power calculation page .
 *      requestBody:
 *            required: true
 *            content:
 *                 application/json:
 *                    schema:
 *                      type: object
 *                      $ref: '#components/schemas/data/'
 *      responses:
 *            200:
 *              description: Showing the result of power of numbers.
 *        
 */

router.route("/pow").post(check,powcontrol);
/**
 * @swagger
 * /sqrt:
 *    post:
 *      summary: This is square root page of our calculator.
 *      description: square root page .
 *      requestBody:
 *            required: true
 *            content:
 *                 application/json:
 *                    schema:
 *                      type: object
 *                      $ref: '#components/schemas/data2/'
 *      responses:
 *            200:
 *              description: Showing the result of square root of number.
 *        
 */

router.route("/sqrt").post(sqrtcontrol);
/**
 * @swagger
 * /sub:
 *    post:
 *      summary: This is subtraction page of our calculator.
 *      description: subtraction page .
 *      requestBody:
 *            required: true
 *            content:
 *                 application/json:
 *                    schema:
 *                      type: object
 *                      $ref: '#components/schemas/data/'
 *      responses:
 *            200:
 *              description: Showing the result of subtraction of numbers.
 *        
 */

router.route("/sub").post(check,subcontrol);

export {router};
